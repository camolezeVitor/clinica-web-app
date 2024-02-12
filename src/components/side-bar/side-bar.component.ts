import { Component } from "@angular/core";
import { DEFAULTSIDEBAR } from "./const/default-side-bar-selection";
import { SideBarSection } from "../../models/side-bar-section.model";
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    selector: "side-bar",
    imports: [TooltipModule, AccordionModule, ButtonModule, CommonModule],
    template: `
    <div class="side-bar">
        <!-- Header !-->
        <div class="side-bar-header centralize">
            <img class="logo-img" src="../assets/imgs/clinica-cuidar-logo.png" alt="NOT FOUND">
        </div>

        <div class="buttons">
        <p-accordion [multiple]="true">
            @for(tab of defaultSideBar; track $index) {
                <p-accordionTab header="{{tab.title}}" iconPos="start" [selected]="true">
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        @for (button of tab.buttons; track $index) {
                            <button class="btn" [ngClass]="{'btn-selected': verificarRota('a')}">{{button.title}}</button>
                        }
                    </div>
                </p-accordionTab>   
            }
        </p-accordion>
    </div>
    `,
    styleUrl: "./side-bar.style.scss"
})
export class SideBarComponent {
    public defaultSideBar: Array<SideBarSection> = DEFAULTSIDEBAR;

    constructor(private router: Router) {

    }

    public verificarRota(route: string) {
        console.log(this.router.url)
    }
}