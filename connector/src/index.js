import { showTemplate } from "./espruino-template";
import "./styles/app.scss";
import { Connector } from "@espruino-tools/peer";

window.onload = function () {
  let p = new Connector();

  p.connectData();

  showTemplate();
};
