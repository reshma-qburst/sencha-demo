Ext.define('MyApp.view.CalenderView', {
    extend: 'Ext.tab.Panel',
    id: 'calenderscreen',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        layout: {
            type: 'card',
            animation: {
                type: 'flip'
            }
        },
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
                title: 'Contact',
                iconCls: 'user',
                xtype: 'formpanel',
                url: '',
                layout: 'vbox',

                items: [{
                    xtype: 'fieldset',
                    title: 'Contact Us',
                    instructions: '(email address is optional)',
                    height: 285,
                    items: [{
                        xtype: 'textfield',
                        label: 'Name'
                    }, {
                        xtype: 'emailfield',
                        label: 'Email'
                    }, {
                        xtype: 'textareafield',
                        label: 'Message'
                    }]
                }, {
                    xtype: 'button',
                    text: 'Send',
                    ui: 'confirm',
                    handler: function() {
                        this.up('formpanel').submit();
                    }
                }]
            }]
        }],

        html: [
            ""
        ].join("")

    },
});
