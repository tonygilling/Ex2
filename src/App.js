Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
  items:{
        html:'<a href="https://help.rallydev.com/apps/2.0rc1/doc/#!/api/Rally.ui.cardboard.CardBoard">Hint!<a>'
    },
    launch: function() {
        var cardBoardConfig = {
            xtype: 'rallycardboard',
            types: ['User Story', 'Defect'],
            attribute: "ScheduleState",
            cardConfig:{
                xtype: 'customcard'
            }
        };
        this.add(cardBoardConfig);
    }
});
