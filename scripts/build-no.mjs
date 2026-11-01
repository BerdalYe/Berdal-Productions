// Generates no/index.html (Norwegian) from index.html (English) + i18n/no.json.
// Run: node scripts/build-no.mjs   (Cloudflare runs it on every deploy)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const ORIGIN = 'https://berdalproductions.berdal.dev';
const src = readFileSync('index.html', 'utf8');
const { meta, strings } = JSON.parse(readFileSync('i18n/no.json', 'utf8'));
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const escAttr = (t) => esc(t).replace(/"/g, '&quot;');
const need = (k) => {
  if (!(k in strings)) throw new Error(`i18n/no.json is missing "${k}"`);
  return strings[k];
};

let html = src;

// leaf elements: <tag ... data-i18n="key" ...>text</tag>
html = html.replace(/(<(\w+)\b[^>]*\sdata-i18n="([^"]+)"[^>]*>)([^<]*)(<\/\2>)/g,
  (_, open, _tag, key, _txt, close) => open + esc(need(key)) + close);

// aria-label driven by data-i18n-aria
html = html.replace(/aria-label="[^"]*"(\s[^>]*?data-i18n-aria="([^"]+)")/g,
  (_, rest, key) => `aria-label="${escAttr(need(key))}"${rest}`);

// <html lang>
html = html.replace('<html lang="en">', '<html lang="nb">');

// title + descriptions
const enTitle = /<title>(.*?)<\/title>/.exec(src)[1];
const enDesc = /<meta name="description" content="([^"]*)">/.exec(src)[1];
const enOgDesc = /<meta property="og:description" content="([^"]*)">/.exec(src)[1];
html = html.split(enTitle).join(esc(meta.title));
html = html.split(enDesc).join(escAttr(meta.desc));
html = html.split(enOgDesc).join(escAttr(meta.ogDesc || meta.desc));

// URLs and locale
html = html
  .replace(`<link rel="canonical" href="${ORIGIN}/">`, `<link rel="canonical" href="${ORIGIN}/no/">`)
  .replace(`<meta property="og:url" content="${ORIGIN}/">`, `<meta property="og:url" content="${ORIGIN}/no/">`)
  .replace('content="en_US"', 'content="__A__"').replace('content="nb_NO"', 'content="en_US"').replace('content="__A__"', 'content="nb_NO"');

// language switch points back to English
html = html
  .replace('<a class="lang-toggle" href="/no/" hreflang="nb" lang="nb"', '<a class="lang-toggle" href="/" hreflang="en" lang="en"')
  .replace('<span class="lang-current">EN</span>', '<span class="lang-current">NO</span>')
  .replace('<span class="lang-other">NO</span>', '<span class="lang-other">EN</span>');

mkdirSync('no', { recursive: true });
writeFileSync('no/index.html', html);
console.log('wrote no/index.html');
