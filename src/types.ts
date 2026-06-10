export interface Option {
  label: string;
  scoreKey: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface ResultData {
  name: string;
  headline: string;
  desc: string;
  cardQuote: string;
  bgImage: string;
  strengths: string[];
  watchouts: string[];
  style: string;
  cities: string;
  ctaPrimary: string;
}
