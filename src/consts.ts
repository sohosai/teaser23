import { i18nAdapter, t } from "src/utils/i18n";

import type { YYYYMMDD } from "src/types/date";
export const DEFAULT_OGP_IMAGE = "ogp.png";
export const START_DATE: YYYYMMDD = "2023-11-04";
export const END_DATE: YYYYMMDD = "2023-11-05";
export const DEFAULT_TIMEZONE = "Asia/Tokyo";

const keys = [
  "base.雙峰祭",
  "top.筑波大学園祭",
  "404.見出し",
  "nav.お知らせ",
  "nav.協賛・取材",
  "nav.実委",
  "nav.新歓",
  "404.見出し",
];
const h1Characters = keys.map((key) => t(key, "ja"));

const subsetTextRaw = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" + h1Characters;

export const SUBSET_TEXT = encodeURIComponent([...new Set([...subsetTextRaw])].join(""));
