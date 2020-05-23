export class ListConstants {
    private static tableSettings = {
        actions: {
            add: false,
            edit: false,
            delete: true,
            position: 'right',
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {
            title: {
                title: 'Nombre',
                type: 'string',
            },
            degree: {
                title: 'Titulación',
                type: 'string',
            },
            level: {
                title: 'Nivel',
                type: 'string',
            },
        },
    };

    public static getTableSettings(): object {
        return this.tableSettings;
    }
}
