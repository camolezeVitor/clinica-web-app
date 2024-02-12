import { SideBarButton } from "./side-bar-model";

export class SideBarSection {
    id: number = 0;
    isExpanded: boolean = true;
    title: string = "";
    icon?: string = "";
    buttons: Array<SideBarButton> = []
}