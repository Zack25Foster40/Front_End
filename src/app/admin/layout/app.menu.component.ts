import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Administración',
                items: [
                    { label: 'Perfil', icon: 'pi pi-fw pi-user', routerLink: ['/admin/perfil'] },
                    { label: 'Cliente', icon: 'pi pi-check', routerLink: ['/admin/cliente'] }
                ]
            },
            {
                label: 'Inventario',
                items: [
                    { label: 'Categoría', icon: 'pi pi-ellipsis-v', routerLink: ['/admin/categoria'] },
                    { label: 'Producto', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/producto'] },
                    
                ]
            },
                 
        ];
    }
}
