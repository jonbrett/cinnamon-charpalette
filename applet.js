//Character Palette applet by CharPalette@peyser.net
const Applet = imports.ui.applet;
const Main = imports.ui.main;
const PopupMenu = imports.ui.popupMenu;
const Util = imports.misc.util;
const St = imports.gi.St;


// // I can use this to pull characters from a text file and then place them in menus using unicode
// function toUnicode(theString) {
//   var unicodeString = '';
//   for (var i=0; i < theString.length; i++) {
//     var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
//     while (theUnicode.length < 4) {
//       theUnicode = '0' + theUnicode;
//     }
//     theUnicode = '\\u' + theUnicode;
//     unicodeString += theUnicode;
//   }
//   return unicodeString;
// }


function MyApplet(orientation) {
    this._init(orientation);
}

MyApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(orientation) {        
        Applet.IconApplet.prototype._init.call(this, orientation);
        
        try {        
            this.set_applet_icon_symbolic_name("accessories-character-map-symbolic");
            this.set_applet_tooltip(_("Choose from unicode characters"));
            
            this.menuManager = new PopupMenu.PopupMenuManager(this);
            this.menu = new Applet.AppletPopupMenu(this, orientation);
            this.menuManager.addMenu(this.menu);        
                                                                
            this._contentSection = new PopupMenu.PopupMenuSection();
            this.menu.addMenuItem(this._contentSection);                    
                                                    
          		
            //First palette
		    this.firstMenu = new PopupMenu.PopupSubMenuMenuItem('\u00A4\u00A3\u00A5\u00A2\u20AC\u00A9\u00AE\u00B0\u00B1\u212B');
		    this.firstMenu.menu.addAction('\u00A4', function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
	            clipboard.set_text('\u00A4');
		    });
		    this.firstMenu.menu.addAction('\u00A3', function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u00A3');
		    });
		    this.firstMenu.menu.addAction('\u00A5', function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u00A5');
		    });
		    this.firstMenu.menu.addAction('\u00A2', function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u00A2');
		    });
		    this.firstMenu.menu.addAction('\u20AC', function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u20AC');
		    });
		    this.firstMenu.menu.addAction('\u00A9', function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u00A9');
		    });
		    this.firstMenu.menu.addAction('\u00AE', function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u00AE');
		    });
		    this.firstMenu.menu.addAction('\u00B0', function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u00B0');
		    });
		    this.firstMenu.menu.addAction('\u00B1', function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u00B1');
		    });
		    this.firstMenu.menu.addAction('\u212B', function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u212B');
		    });

            //Second palette
		    this.secondMenu = new PopupMenu.PopupSubMenuMenuItem("\u0393\u0394\u0398\u039B\u039E\u03A0\u03A3\u03A6\u03A9\u03A8"); 
		    this.secondMenu.menu.addAction("\u0393", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u0393');
		    });
		    this.secondMenu.menu.addAction("\u0394", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u0394');
		    });
		    this.secondMenu.menu.addAction("\u0398", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u0398');
		    });
		    this.secondMenu.menu.addAction("\u039B", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u039B');
		    });
		    this.secondMenu.menu.addAction("\u039E", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u039E');
		    });
		    this.secondMenu.menu.addAction("\u03A0", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03A0');
		    });
		    this.secondMenu.menu.addAction("\u03A3", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03A3');
		    });
		    this.secondMenu.menu.addAction("\u03A6", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03A6');
		    });
		    this.secondMenu.menu.addAction("\u03A9", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03A9');
		    });
		    this.secondMenu.menu.addAction("\u03A8", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03A8');
		    });

            //Third palette
		    this.thirdMenu = new PopupMenu.PopupSubMenuMenuItem("\u03B1\u03B2\u03B3\u03B4\u03B5\u03B6\u03B7\u03B8\u03B9\u03BA\u03BA\u03BC"); 
		    this.thirdMenu.menu.addAction("\u03B1", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03B1');
		    });
		    this.thirdMenu.menu.addAction("\u03B2", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03B2');
		    });
		    this.thirdMenu.menu.addAction("\u03B3", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03B3');
		    });
		    this.thirdMenu.menu.addAction("\u03B4", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03B4');
		    });
		    this.thirdMenu.menu.addAction("\u03B5", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03B5');
		    });
		    this.thirdMenu.menu.addAction("\u03B6", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03B6');
		    });
		    this.thirdMenu.menu.addAction("\u03B7", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03B7');
		    });
		    this.thirdMenu.menu.addAction("\u03B8", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03B8');
		    });
		    this.thirdMenu.menu.addAction("\u03B9", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03B9');
		    });
		    this.thirdMenu.menu.addAction("\u03BA", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03BA');
		    });
		    this.thirdMenu.menu.addAction("\u03BB", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03BB');
		    });
		    this.thirdMenu.menu.addAction("\u03BC", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03BC');
		    });

            //Fourth palette
		    this.fourthMenu = new PopupMenu.PopupSubMenuMenuItem("\u03BD\u03BE\u03BF\u03C0\u03C1\u03C2\u03C3\u03C4\u03C5\u03C6\u03C7\u03C8\u03C9"); 
		    this.fourthMenu.menu.addAction("\u03BD", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03BD');
		    });
		    this.fourthMenu.menu.addAction("\u03BE", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03BE');
		    });
		    this.fourthMenu.menu.addAction("\u03BF", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03BF');
		    });
		    this.fourthMenu.menu.addAction("\u03C0", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03C0');
		    });
		    this.fourthMenu.menu.addAction("\u03C1", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03C1');
		    });
		    this.fourthMenu.menu.addAction("\u03C2", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03C2');
		    });
		    this.fourthMenu.menu.addAction("\u03C3", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03C3');
		    });
		    this.fourthMenu.menu.addAction("\u03C4", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03C4');
		    });
		    this.fourthMenu.menu.addAction("\u03C5", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03C5');
		    });
		    this.fourthMenu.menu.addAction("\u03C6", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03C6');
		    });
		    this.fourthMenu.menu.addAction("\u03C7", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03C7');
		    });
		    this.fourthMenu.menu.addAction("\u03C8", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03C8');
		    });
		    this.fourthMenu.menu.addAction("\u03C9", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u03C9');
		    });

            //Fifth palette
		    this.fifthMenu = new PopupMenu.PopupSubMenuMenuItem("\u2243\u2245\u2248\u2260\u2261\u2264\u2265\u226A\u226B"); 
		    this.fifthMenu.menu.addAction("\u2243", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u2243');
		    });
		    this.fifthMenu.menu.addAction("\u2245", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u2245');
		    });
		    this.fifthMenu.menu.addAction("\u2248", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u2248');
		    });
		    this.fifthMenu.menu.addAction("\u2260", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u2260');
		    });
		    this.fifthMenu.menu.addAction("\u2261", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u2261');
		    });
		    this.fifthMenu.menu.addAction("\u2264", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u2264');
		    });
		    this.fifthMenu.menu.addAction("\u2265", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u2265');
		    });
		    this.fifthMenu.menu.addAction("\u226A", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u226A');
		    });
		    this.fifthMenu.menu.addAction("\u226B", function(actor, event) {
		    let clipboard = St.Clipboard.get_default()
		    	            clipboard.set_text('\u226B');
		    });


		    this.menu.addMenuItem(this.firstMenu);
		    this.menu.addMenuItem(this.secondMenu);
		    this.menu.addMenuItem(this.thirdMenu);
		    this.menu.addMenuItem(this.fourthMenu);
		    this.menu.addMenuItem(this.fifthMenu);
        }
        catch (e) {
            global.logError(e);
        }
    },
    
    on_applet_clicked: function(event) {
        this.menu.toggle();        
    },        
    
};

function main(metadata, orientation) {  
    let myApplet = new MyApplet(orientation);
    return myApplet;      
}
