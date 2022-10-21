import {DeviceController} from '@espruino-tools/device-controller'
import { showTemplate } from './espruino-template';
import './styles/app.scss'
const device = new DeviceController();

export const connect = () => device.connect()

window.onload = function(){
   showTemplate()
}

