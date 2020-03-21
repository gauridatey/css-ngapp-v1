import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  constructor() {}

  // alert and toast messages
  public MESSAGE_DISPLAY_TYPE_ALERT = 'alert';
  public MESSAGE_DISPLAY_TYPE_TOAST = 'toast';

  public MESSAGE_TYPE_SUCESS = 'success';
  public MESSAGE_TYPE_INFO = 'info';
  public MESSAGE_TYPE_ERROR = 'error';

  public MESSAGE_TOAST_TIMEOUT = 2500;

  public capitalizeFirstLetter(inputText: string) {
    if (inputText && inputText.length > 0) {
      return inputText.charAt(0).toUpperCase() + inputText.slice(1);
    }
    return inputText;
  }
}
