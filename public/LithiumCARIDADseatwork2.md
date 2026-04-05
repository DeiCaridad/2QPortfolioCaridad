## GUIDE QUESTION ANSWERS

1. The position of the side bar changed relative to the normal position. It moved a little to the right and a set space from the top. 

2. The position of the footer stays in place in the viewport even when the user scrolls. It behaves differently from relative since its viewport position never changes when the user scrolls as compared to a changed position that can move in the viewport when scrolled.

3. The position of the content moves relative to its closest ancestor. It is not fixed into the viewport display when the user scrolls, since it is only relative to its ancestor, differing from the constant position in the viewport that fixed has.

4. The notice appears in front of the content because of its z-index value. The z-index value indicates the layer an object occupies in the viewport, and the higher the value the higher the layer. Swapping the z-index value gives priority to the other object, making that object appear on top of the other. 


### CHALLENGE QUESTION ANSWERS

- I made the content box the ancestor of notice in order for the absolute positioning to work. I also changed the position of notice to position it in the top left corner.
- When I changed the value of position in "content" to relative, the box moved a downward. When I changed it to fixed, it went back to the position it was in when it had "absolute" as its value. It stays in place when the user scrolls.
- The z-index changes the object's visibility (i.e. the layering of the object/s) depending on the value, where higher z-index values indicate a higher layer. In the case of the notice and content boxes, it changes the "stacking" of the two. When the z-index of notice is set to 1, for example, it goes behind the content box. When it is set to 2, the notice goes in front of the content box since the z-index of the content box is 1.

## REFLECTION QUESTION ANSWERS

a. Static is the normal, default position of the object. Relative is the position of the object relative to its normal position, it does not stay in the viewport when scrolled and is solely based on the normal position. The absolute position is the position of the object relative to its closest ancestor, when no ancestor is present, it is based on the body or html tag. Its position changes in the viewport when the user scrolls. Lastly, fixed is the object's position relative to the viewport (the user's window), it does not change when the user scrolls. It is a set, constant position of an object in the web page. 

b. Absolute positioning depends on its parent element because coordinate/location values such as top and right are relative on the ancestor.

c. Sticky differs from fixed as it is a sort of "combination" of fixed and absolute. It remains in a relative position (a position relative to a default position) until scroll threshold, and when the user scrolls the position changes into a fixed position. 

d. Positioning can be used to highlight important information such as web page updates, contact information, and headers (that often have dropdowns or quick redirect links to other pages). For example, one can use fixed to create a constant, easily accessible header for the user to go back to the main page, log in//sign up, etc. 