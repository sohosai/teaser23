import { t } from "src/utils/i18n";

import type { YYYYMMDD } from "src/types/date";
export const START_DATE: YYYYMMDD = "2024-11-03";
export const END_DATE: YYYYMMDD = "2024-11-04";
export const DEFAULT_TIMEZONE = "Asia/Tokyo";

export const TWITTER_ID = "@sohosai";
export const INSTAGRAM_ID = "@sohosai";
export const DEFAULT_OGP_IMAGE = "opengraph-image.png";

const keys = [
  "base.雙峰祭",
  "top.筑波大学園祭",
  "404.見出し",
  "nav.お知らせ",
  "nav.協賛・取材",
  "nav.実委",
  "nav.新歓",
  "committee.実行委員会とは",
];
const h1Characters = keys.map((key) => t(key, "ja"));

const subsetTextRaw =
  `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}~` + h1Characters;

export const SUBSET_TEXT = encodeURIComponent([...new Set([...subsetTextRaw])].join(""));
