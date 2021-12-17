import { XboxTitleHistoryElement } from "./xbox-title-history-element.model";

export interface XboxTitleHistoryResponse {
  xuid: string;
  titles: XboxTitleHistoryElement[];
}
