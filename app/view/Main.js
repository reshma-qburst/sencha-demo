Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'MyApp.view.CalenderView'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [{
            title: 'Home',
            iconCls: 'home',

            styleHtmlContent: true,
            scrollable: true,

            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Hospital Management'
            }, {

                ui: 'round',
                xtype: 'button',
                text: 'Manage Cases'
            }, {
                ui: 'round',
                xtype: 'button',
                text: 'Manage Equipments',
                listeners: {
                    tap: function() {
                        //Ext.Viewport.add(Ext.create("MyApp.view.CalenderView", { id: 'calenderscreen' }));
                        var list = Ext.create('MyApp.view.CalenderView', { id: 'calenderscreen' });
                        Ext.Viewport.add(list);
                        Ext.Viewport.setActiveItem(list);
                    }
                }
            }],

            html: [
                ""
            ].join("")
        }]
    }
});
