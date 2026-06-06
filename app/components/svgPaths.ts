// All SVG zone paths for each silhouette view
// ViewBox: "0 0 300 645" for all views

// ─── SHARED PATHS (arms identical across views) ───────────────────

const leftOuterArm   = "M 24,174 L 8,186 L 5,264 L 44,270 L 54,196 L 28,174 Z";
const leftInnerArm   = "M 54,196 L 44,270 L 88,274 L 88,188 Z";
const rightOuterArm  = "M 276,174 L 292,186 L 295,264 L 256,270 L 246,196 L 272,174 Z";
const rightInnerArm  = "M 246,196 L 256,270 L 212,274 L 212,188 Z";

const leftOuterForearm  = "M 5,264 L 8,348 L 40,354 L 44,270 Z";
const leftInnerForearm  = "M 44,270 L 40,354 L 82,358 L 88,274 Z";
const rightOuterForearm = "M 295,264 L 292,348 L 260,354 L 256,270 Z";
const rightInnerForearm = "M 256,270 L 260,354 L 218,358 L 212,274 Z";

const leftHand   = "M 8,348 L 6,392 L 46,398 L 40,354 Z";
const rightHand  = "M 292,348 L 294,392 L 254,398 L 260,354 Z";
const leftFingers  = "M 6,392 L 5,436 L 52,440 L 46,398 Z";
const rightFingers = "M 294,392 L 295,436 L 248,440 L 254,398 Z";

// Female arms (slightly slimmer)
const leftOuterArmF   = "M 36,170 L 20,182 L 17,260 L 48,266 L 58,190 L 40,170 Z";
const leftInnerArmF   = "M 58,190 L 48,266 L 90,270 L 90,184 Z";
const rightOuterArmF  = "M 264,170 L 280,182 L 283,260 L 252,266 L 242,190 L 260,170 Z";
const rightInnerArmF  = "M 242,190 L 252,266 L 210,270 L 210,184 Z";

const leftOuterForearmF  = "M 17,260 L 14,346 L 44,350 L 48,266 Z";
const leftInnerForearmF  = "M 48,266 L 44,350 L 84,354 L 90,270 Z";
const rightOuterForearmF = "M 283,260 L 286,346 L 256,350 L 252,266 Z";
const rightInnerForearmF = "M 252,266 L 256,350 L 216,354 L 210,270 Z";

const leftHandF   = "M 14,346 L 11,390 L 48,396 L 44,350 Z";
const rightHandF  = "M 286,346 L 289,390 L 252,396 L 256,350 Z";
const leftFingersF  = "M 11,390 L 9,434 L 54,438 L 48,396 Z";
const rightFingersF = "M 289,390 L 291,434 L 246,438 L 252,396 Z";

// ─── MALE FRONT ───────────────────────────────────────────────────

export const maleFrontPaths: Record<string, string> = {
  tete:          "M 150,10 C 189,10 192,32 192,55 C 192,85 175,100 150,100 C 125,100 108,85 108,55 C 108,32 111,10 150,10 Z",
  cou:           "M 130,97 Q 128,108 127,120 L 173,120 Q 172,108 170,97 Z",
  epaule_g:      "M 127,118 L 28,145 L 24,174 L 88,188 L 92,160 L 130,140 Z",
  epaule_d:      "M 173,118 L 272,145 L 276,174 L 212,188 L 208,160 L 170,140 Z",
  poitrine_g:    "M 92,160 L 88,188 L 84,230 L 150,240 L 150,152 L 130,140 Z",
  poitrine_d:    "M 150,152 L 150,240 L 216,230 L 212,188 L 208,160 L 170,140 Z",
  sternum:       "M 142,120 L 158,120 L 156,240 L 144,240 Z",
  cotes_g:       "M 84,230 L 70,272 L 75,320 L 150,326 L 150,240 Z",
  cotes_d:       "M 216,230 L 230,272 L 225,320 L 150,326 L 150,240 Z",
  ventre:        "M 75,320 L 72,344 L 150,352 L 228,344 L 225,320 L 150,326 Z",
  hanches_g:     "M 72,344 L 64,370 L 76,382 L 148,380 L 150,352 Z",
  hanches_d:     "M 228,344 L 236,370 L 224,382 L 152,380 L 150,352 Z",
  bras_ext_g:    leftOuterArm,
  bras_int_g:    leftInnerArm,
  bras_ext_d:    rightOuterArm,
  bras_int_d:    rightInnerArm,
  avantbras_ext_g: leftOuterForearm,
  avantbras_int_g: leftInnerForearm,
  avantbras_ext_d: rightOuterForearm,
  avantbras_int_d: rightInnerForearm,
  main_g:        leftHand,
  main_d:        rightHand,
  doigts_g:      leftFingers,
  doigts_d:      rightFingers,
  cuisse_ext_g:  "M 64,370 L 48,462 L 90,467 L 106,384 L 76,382 Z",
  cuisse_int_g:  "M 106,384 L 90,467 L 148,470 L 150,386 L 148,380 Z",
  cuisse_int_d:  "M 152,380 L 150,386 L 152,470 L 210,467 L 194,384 Z",
  cuisse_ext_d:  "M 194,384 L 210,467 L 252,462 L 236,370 L 224,382 Z",
  genou_g:       "M 48,462 L 45,508 L 94,512 L 90,467 Z",
  genou_d:       "M 252,462 L 255,508 L 206,512 L 210,467 Z",
  tibia_g:       "M 45,508 L 49,584 L 90,582 L 94,512 Z",
  tibia_d:       "M 255,508 L 251,584 L 210,582 L 206,512 Z",
  cheville_g:    "M 49,584 L 47,610 L 92,614 L 90,582 Z",
  cheville_d:    "M 251,584 L 253,610 L 208,614 L 210,582 Z",
  pied_g:        "M 47,610 L 35,638 L 116,642 L 92,614 Z",
  pied_d:        "M 253,610 L 265,638 L 184,642 L 208,614 Z",
};

// ─── MALE BACK ────────────────────────────────────────────────────

export const maleBackPaths: Record<string, string> = {
  tete:          "M 150,10 C 189,10 192,32 192,55 C 192,85 175,100 150,100 C 125,100 108,85 108,55 C 108,32 111,10 150,10 Z",
  cou:           "M 130,97 Q 128,108 127,120 L 173,120 Q 172,108 170,97 Z",
  epaule_g:      "M 127,118 L 28,145 L 24,174 L 88,188 L 92,160 L 130,140 Z",
  epaule_d:      "M 173,118 L 272,145 L 276,174 L 212,188 L 208,160 L 170,140 Z",
  dos_g:         "M 92,160 L 88,188 L 83,230 L 78,320 L 150,326 L 150,152 Z",
  dos_d:         "M 150,152 L 150,326 L 222,320 L 217,230 L 212,188 L 208,160 Z",
  colonne:       "M 143,120 L 157,120 L 155,326 L 145,326 Z",
  lombaires:     "M 78,320 L 75,350 L 150,358 L 225,350 L 222,320 L 150,326 Z",
  fesses_g:      "M 75,350 L 62,452 L 148,460 L 150,358 Z",
  fesses_d:      "M 150,358 L 152,460 L 238,452 L 225,350 Z",
  bras_ext_g:    leftOuterArm,
  bras_int_g:    leftInnerArm,
  bras_ext_d:    rightOuterArm,
  bras_int_d:    rightInnerArm,
  avantbras_ext_g: leftOuterForearm,
  avantbras_int_g: leftInnerForearm,
  avantbras_ext_d: rightOuterForearm,
  avantbras_int_d: rightInnerForearm,
  main_g:        leftHand,
  main_d:        rightHand,
  doigts_g:      leftFingers,
  doigts_d:      rightFingers,
  cuisse_ext_g:  "M 62,452 L 46,548 L 90,552 L 104,462 L 148,460 Z",
  cuisse_int_g:  "M 148,460 L 104,462 L 90,552 L 150,556 L 150,466 Z",
  cuisse_int_d:  "M 152,466 L 150,556 L 210,552 L 196,462 L 152,460 Z",
  cuisse_ext_d:  "M 196,462 L 210,552 L 254,548 L 238,452 L 152,460 Z",
  genou_g:       "M 46,548 L 43,594 L 92,598 L 90,552 Z",
  genou_d:       "M 254,548 L 257,594 L 208,598 L 210,552 Z",
  mollet_g:      "M 43,594 L 41,636 L 93,639 L 92,598 Z",
  mollet_d:      "M 257,594 L 259,636 L 207,639 L 208,598 Z",
  cheville_g:    "M 41,636 L 38,645 L 95,645 L 93,639 Z",
  cheville_d:    "M 259,636 L 262,645 L 205,645 L 207,639 Z",
};

// ─── FEMALE FRONT ─────────────────────────────────────────────────

export const femaleFrontPaths: Record<string, string> = {
  tete:          "M 150,12 C 186,12 190,32 190,54 C 190,82 174,98 150,98 C 126,98 110,82 110,54 C 110,32 114,12 150,12 Z",
  cou:           "M 132,95 Q 130,108 129,120 L 171,120 Q 170,108 168,95 Z",
  epaule_g:      "M 129,118 L 40,142 L 36,170 L 90,184 L 94,158 L 130,140 Z",
  epaule_d:      "M 171,118 L 260,142 L 264,170 L 210,184 L 206,158 L 170,140 Z",
  poitrine_g:    "M 94,158 L 90,184 L 80,228 C 76,250 90,272 116,278 L 148,272 L 150,152 L 130,140 Z",
  poitrine_d:    "M 150,152 L 152,272 L 184,278 C 210,272 224,250 220,228 L 210,184 L 206,158 L 170,140 Z",
  sternum:       "M 142,120 L 158,120 L 156,272 L 144,272 Z",
  cotes_g:       "M 80,228 L 66,270 C 60,288 64,316 74,328 L 150,334 L 148,272 Z",
  cotes_d:       "M 220,228 L 234,270 C 240,288 236,316 226,328 L 150,334 L 152,272 Z",
  ventre:        "M 74,328 L 68,354 L 150,362 L 232,354 L 226,328 L 150,334 Z",
  hanches_g:     "M 68,354 L 52,382 L 68,396 L 148,394 L 150,362 Z",
  hanches_d:     "M 232,354 L 248,382 L 232,396 L 152,394 L 150,362 Z",
  bras_ext_g:    leftOuterArmF,
  bras_int_g:    leftInnerArmF,
  bras_ext_d:    rightOuterArmF,
  bras_int_d:    rightInnerArmF,
  avantbras_ext_g: leftOuterForearmF,
  avantbras_int_g: leftInnerForearmF,
  avantbras_ext_d: rightOuterForearmF,
  avantbras_int_d: rightInnerForearmF,
  main_g:        leftHandF,
  main_d:        rightHandF,
  doigts_g:      leftFingersF,
  doigts_d:      rightFingersF,
  cuisse_ext_g:  "M 52,382 L 36,476 L 82,481 L 100,398 L 68,396 Z",
  cuisse_int_g:  "M 100,398 L 82,481 L 148,484 L 150,400 L 148,394 Z",
  cuisse_int_d:  "M 152,394 L 150,400 L 152,484 L 218,481 L 200,398 Z",
  cuisse_ext_d:  "M 200,398 L 218,481 L 264,476 L 248,382 L 232,396 Z",
  genou_g:       "M 36,476 L 33,522 L 86,526 L 82,481 Z",
  genou_d:       "M 264,476 L 267,522 L 214,526 L 218,481 Z",
  tibia_g:       "M 33,522 L 37,592 L 84,590 L 86,526 Z",
  tibia_d:       "M 267,522 L 263,592 L 216,590 L 214,526 Z",
  cheville_g:    "M 37,592 L 35,618 L 86,622 L 84,590 Z",
  cheville_d:    "M 263,592 L 265,618 L 214,622 L 216,590 Z",
  pied_g:        "M 35,618 L 23,640 L 112,644 L 86,622 Z",
  pied_d:        "M 265,618 L 277,640 L 188,644 L 214,622 Z",
};

// ─── FEMALE BACK ──────────────────────────────────────────────────

export const femaleBackPaths: Record<string, string> = {
  tete:          "M 150,12 C 186,12 190,32 190,54 C 190,82 174,98 150,98 C 126,98 110,82 110,54 C 110,32 114,12 150,12 Z",
  cou:           "M 132,95 Q 130,108 129,120 L 171,120 Q 170,108 168,95 Z",
  epaule_g:      "M 129,118 L 40,142 L 36,170 L 90,184 L 94,158 L 130,140 Z",
  epaule_d:      "M 171,118 L 260,142 L 264,170 L 210,184 L 206,158 L 170,140 Z",
  dos_g:         "M 94,158 L 90,184 L 86,228 L 80,320 L 150,326 L 150,152 Z",
  dos_d:         "M 150,152 L 150,326 L 220,320 L 214,228 L 210,184 L 206,158 Z",
  colonne:       "M 143,120 L 157,120 L 155,326 L 145,326 Z",
  lombaires:     "M 80,320 L 70,354 L 150,362 L 230,354 L 220,320 L 150,326 Z",
  fesses_g:      "M 70,354 L 50,464 L 148,474 L 150,362 Z",
  fesses_d:      "M 150,362 L 152,474 L 250,464 L 230,354 Z",
  bras_ext_g:    leftOuterArmF,
  bras_int_g:    leftInnerArmF,
  bras_ext_d:    rightOuterArmF,
  bras_int_d:    rightInnerArmF,
  avantbras_ext_g: leftOuterForearmF,
  avantbras_int_g: leftInnerForearmF,
  avantbras_ext_d: rightOuterForearmF,
  avantbras_int_d: rightInnerForearmF,
  main_g:        leftHandF,
  main_d:        rightHandF,
  doigts_g:      leftFingersF,
  doigts_d:      rightFingersF,
  cuisse_ext_g:  "M 50,464 L 34,560 L 82,564 L 100,474 L 148,474 Z",
  cuisse_int_g:  "M 148,474 L 100,474 L 82,564 L 150,568 L 150,480 Z",
  cuisse_int_d:  "M 152,480 L 150,568 L 218,564 L 200,474 L 152,474 Z",
  cuisse_ext_d:  "M 200,474 L 218,564 L 266,560 L 250,464 L 152,474 Z",
  genou_g:       "M 34,560 L 31,605 L 86,609 L 82,564 Z",
  genou_d:       "M 266,560 L 269,605 L 214,609 L 218,564 Z",
  mollet_g:      "M 31,605 L 29,640 L 89,643 L 86,609 Z",
  mollet_d:      "M 269,605 L 271,640 L 211,643 L 214,609 Z",
  cheville_g:    "M 29,640 L 26,645 L 91,645 L 89,643 Z",
  cheville_d:    "M 271,640 L 274,645 L 209,645 L 211,643 Z",
};

export type ViewType = 'maleFront' | 'maleBack' | 'femaleFront' | 'femaleBack';

export const VIEW_PATHS: Record<ViewType, Record<string, string>> = {
  maleFront:   maleFrontPaths,
  maleBack:    maleBackPaths,
  femaleFront: femaleFrontPaths,
  femaleBack:  femaleBackPaths,
};
