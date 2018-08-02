const Animations = (function(){
  const _realtimes = [];
  return {
    add: function ( obj ) {
      
        const fresh = obj.tag?(_realtimes.map(o => o.tag || "").indexOf(obj.tag)==-1):true;
        if(fresh) {_realtimes.push( obj )}
    },
    remove: function ( obj ) {
      var i;
      if(typeof obj == "string") {
        i = _realtimes.map(o => o.tag || "").indexOf(obj);
      } else {
        i = _realtimes.indexOf( obj );
      }
      if ( i !== -1 ) {
        _realtimes.splice( i, 1 );
      }
    },
    update: function () {
      _realtimes.forEach(obj => {obj.update()});
    }
  };
})();

export default Animations;