// // Material Select Initialization
// $(document).ready(function() {
//     $('.mdb-select').materialSelect();
//     });


$('select').selectpicker();

$( function() {
    var courses = ["ME","EE","COMP"];
    $( "#search-bar-input" ).autocomplete({
      source: courses
    });
} );


// $('#search-bar-input').mdbAutocomplete({
//     data: courses
// });

// $( function() {
//     var availableTags = [
//       "ActionScript",
//       "AppleScript",
//       "Asp",
//       "BASIC",
//       "C",
//       "C++",
//       "Clojure",
//       "COBOL",
//       "ColdFusion",
//       "Erlang",
//       "Fortran",
//       "Groovy",
//       "Haskell",
//       "Java",
//       "JavaScript",
//       "Lisp",
//       "Perl",
//       "PHP",
//       "Python",
//       "Ruby",
//       "Scala",
//       "Scheme"
//     ];
//     $( "#search-bar-input" ).autocomplete({
//       source: availableTags
//     });
//   } );