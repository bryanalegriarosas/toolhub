import menu from './menu.js';
import common from './common.js';
import base64 from './base64.js';
import base64Content from './base64-content.js';
import seo from './seo.js';
import metaTags from './metaTags.js';
import robots from './robots.js';
import sitemap from './sitemap.js';
import keywordDensity from './keywordDensity.js';
import mergePdf from './mergePdf.js';
import splitPdf from './splitPdf.js';
import jpgToPdf from './jpgToPdf.js';
import imageToPdf from './imageToPdf.js';
import imageCompressor from './imageCompressor.js';
import imageResizer from './imageResizer.js';
import imageCropper from './imageCropper.js';
import pngToJpg from './pngToJpg.js';
import jpgToPng from './jpgToPng.js';
import youtubeThumbnailDownloader from './youtubeThumbnailDownloader.js';

export default {
    ...menu,
    ...common,
    ...base64,
    ...base64Content,
    ...seo,
    ...metaTags,
    ...robots,
    ...sitemap,
    ...keywordDensity,
    ...mergePdf,
    ...splitPdf,
    ...jpgToPdf,
    ...imageToPdf,
    ...imageCompressor,
    ...imageResizer,
    ...imageCropper,
    ...pngToJpg,
    ...jpgToPng,
    ...youtubeThumbnailDownloader,
};