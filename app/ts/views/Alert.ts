import {View} from './View';
import { Mensagem } from '../models/index';


export class Alert extends View<Mensagem> {
    template(msg: Mensagem): string {
    return `
        <div class="div-alert slideInDown">
        <div class="toast-header">
            <img src="${msg.loccationDir ?  `../../assets/img/${msg.img}` : msg.img }" class="rounded img-fluid" style="width: 20px;" alt="...">
                <strong class="pl-2 mr-auto">${msg.title}</strong>
            </div>
            <div class="toast-body">
        ${msg.description}
    </div>
    </div>
    `;
    }
}