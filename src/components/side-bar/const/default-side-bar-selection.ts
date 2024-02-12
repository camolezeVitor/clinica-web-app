import { SideBarSection } from "../../../models/side-bar-section.model";

export const DEFAULTSIDEBAR: Array<SideBarSection> = [
    {
        id: 1,
        isExpanded: true,
        title: "Inicio",
        icon: "fa-solid fa-bolt",
        buttons: [
            { title: "Menu Home", route: "/home"},
            { title: "Agenda de Consultas", route: "/agenda"},
            { title: "Gerenciar Pacientes", route: "/g-pac"},
            { title: "Gerenciar Usuários", route: "/g-usr"},
            { title: "Gerenciar Consultas", route: "/g-cns"},
            { title: "Estatísticas", route: "/stats"},
        ]
    },
    {
        id: 2,
        isExpanded: true,
        title: "Pacientes",
        icon: "fa-solid fa-id-card",
        buttons: [
            { title: "Gerenciar Pacientes", route: "/g-pac"},
            { title: "Cadastrar Paciente", route: "/g-pac/crt"},
            { title: "Editar Paciente", route: "/g-pac/edt"},
            { title: "Ver Prontuário", route: "/g-pac"},
        ]
    },
    {
        id: 3,
        isExpanded: true,
        title: "Consultas",
        icon: "fa-solid fa-hand-holding-medical",
        buttons: [
            { title: "Gerenciar Consultas", route: "/g-cns"},
            { title: "Cadastrar Consulta", route: "/g-cns/crt"},
            { title: "Editar Consulta", route: "/g-cns/crt/edt"}
        ]
    },
]