Parse.initialize("ikflc6FJNbil71onUrPvUaM8sqT3wvOzyKf2dMND", "nvoIzKfcRJ4faVv7RaLFsWHlbIkLMoLlmsLpCbbU");

var App = {};

var newStickyCollection = new StickyCollection();

newStickyCollection.fetch().done(function (){

	App.myRouter = new Router();
	Backbone.history.start();

});

var mediaQuery = window.matchMedia('@media all and (max-width: 450px)');
if(mediaQuery.matches) {
    // the width of browser is more then 450px
    

} else {
   $('.column').draggable();
}

// $('.column').on('click', function(){

//     $('#stickies').css('z-index','1');
//     $( this ).css('z-index','1000');

// });

$('.column').click(function() {

    // find the z-index of the top-most item
    var setZindex = 0;
    $('.column').each(function() {
        var z = parseInt($(this).css('z-index'));
        if(isNaN(z)) z = 0;
        if(z > setZindex) setZindex = z;
    });

    // assign a z-index greater than the current max to the clicked item
    $(this).css('z-index', setZindex+1);


}); 
   
// var dragSrcEl = null;

// function handleDragStart(e) {
//   // Target (this) element is the source node.

//   dragSrcEl = this;

//   e.dataTransfer.effectAllowed = 'move';
//   e.dataTransfer.setData('text/html', this.innerHTML);
// }

// function handleDragOver(e) {
//   if (e.preventDefault) {
//     e.preventDefault(); // Necessary. Allows us to drop.
//   }

//   e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

//   return false;
// }

// function handleDragEnter(e) {
//   // this / e.target is the current hover target.
//   this.classList.add('over');
// }

// function handleDragLeave(e) {
//   this.classList.remove('over');  // this / e.target is previous target element.
// }

// function handleDrop(e) {
//   // this/e.target is current target element.

//   if (e.stopPropagation) {
//     e.stopPropagation(); // Stops some browsers from redirecting.
// }

// // Don't do anything if dropping the same column we're dragging.
//   if (dragSrcEl != this) {
//     // Set the source column's HTML to the HTML of the column we dropped on.
//     dragSrcEl.innerHTML = this.innerHTML;
//     this.innerHTML = e.dataTransfer.getData('text/html');
//   }

//   return false;
// }

// function handleDragEnd(e) {
//   // this/e.target is the source node.

//   [].forEach.call(cols, function (col) {
//     col.classList.remove('over');
//   });
// }

// var cols = document.querySelectorAll('#stickies .sticky_container ');
// [].forEach.call(cols, function(col) {
//   col.addEventListener('dragstart', handleDragStart, false);
//   col.addEventListener('dragenter', handleDragEnter, false);
//   col.addEventListener('dragover', handleDragOver, false);
//   col.addEventListener('dragleave', handleDragLeave, false);
//   col.addEventListener('drop', handleDrop, false);
//   col.addEventListener('dragend', handleDragEnd, false);
// });


// allStickies-template


// $('.submit').on('click', function (event) {
//   event.preventDefault();

//   var temp_post = new Post({
//     title: $('.title-container').val(),
//     author: $('.author-container').val(),
//     content: $('.create-post-container').val(),
//     tags: $('.tag-container').val()
    
//   });

//    temp_post.save(null, {
//       success: function(temp_post) {
//         // Adds to my collection
//         all_posts.add(temp_post);
//         // Resets my form 
//         // $(this).trigger('reset');
//         // $('.modal-window').removeClass('modal-open');
//       }
//     });


