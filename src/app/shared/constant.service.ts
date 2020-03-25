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

  public BACKEND_NOT_FOUND = '404 status has been returned';
  public UNAUTHORTIZED_ACCESS = '401 status has been returned';
  public FORBIDDEN_ACCESS = '403 status has been returned';
  public BACKEND_SERVER_DOWN = 'Backend server seems to be down, please try again later';
  public GENERIC_ERROR_MESSAGE = 'Http Error Occured';

  public capitalizeFirstLetter(inputText: string) {
    if (inputText && inputText.length > 0) {
      return inputText.charAt(0).toUpperCase() + inputText.slice(1);
    }
    return inputText;
  }
}
