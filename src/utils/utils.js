/* eslint-disable import/prefer-default-export */
import { SCREEN_SIZE, GALLERY_LAYOUT } from '../constants/option';

export const getGalleryLayout = width => {
  let columns = GALLERY_LAYOUT.LARGE.COLUMNS;
  let gap = GALLERY_LAYOUT.LARGE.GAP;

  if (width < SCREEN_SIZE.MOBILE) {
    columns = GALLERY_LAYOUT.SMALL.COLUMNS;
    gap = GALLERY_LAYOUT.SMALL.GAP;
  } else if (width < SCREEN_SIZE.DESKTOP) {
    columns = GALLERY_LAYOUT.MIDDLE.COLUMNS;
    gap = GALLERY_LAYOUT.MIDDLE.GAP;
  }

  return { columns, gap };
};
