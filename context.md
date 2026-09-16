##C ONTEXT
We are building 3 views of a mobile first responsive website taking airbnb as a reference. We want to identify the components used in each view andh ow they relate to each other. These views are:
- home
- catalog
- room detail


## RESTRICTIONS
- Tailwind CSS only for styling no other UI front end frameworks

## CODE FORMATING
Dont including all tailwind properties in a single line of code as this creates a huge horizontal scrolling , bring it to the next line if needed to make it easy to udnerstand and maintain.

## EXECUTION
Based on this context md and the png files: airbnb-home, airbnb-catalog and airbnb-roomdetailcreate the views based on the details and on the images as a reference to improve execution accuracy


[VIEWS]

**MOBILE FIRST**
# HOME
User goal: Search for rooms to book on a specific location.
## Search bar and Selector chips
- Fixed on scroll container placed at the top includes 
    - Search bar
    - Below search bar selection chips to refine search by all, rooms, experiences or services
## Main 
- H1 describing rooms available on the selected place
- 2 column grid with card components showing room thumbnail, title, date range, price and rating
    - Card grid has horizontal scrolling enabled to reveal the next card when swiping left over the grid edge

## Navigation
Botom app bar fixed on scroll listing 2 sections: Explore, Favorites and Profile

# CATALOG
User goal: See the results of the search perfomed
## Top navigation
Fixed on scroll parent container
- Back button
- User populated search bar
- Refine search icon
- Selector chips below

## MAP
Only show a placeholder container with the text "Map here"

# Botom sheet
Vertical scroll enabled with a 1 column grid with room card components

# ROOM DETAIL
User goal: See a detailed view of the selected room
## Top nav controls
- Back icon button
- Share icon button
- Favorite icon button
## Detail sheet
- H1: Room name
- p: room description
- Host details
    - profile image
    - host name
    - host experience
-  Amenity list
  List all amenitiess with amenity icon, amenity name and descriptions
## Bottom summary
- Shows total price, date range and pricing details
- Book CAT


**MD BREAKPOINT**
# HOME

## Navigation
-  Top nav bar with tab selector
    - All tab
    - Rooms tab
    - Experiences tab
    - Services tab
- Logo left aligned
- Burger menu right aligned to tabs
## Search bar and Selector chips
- Fixed on scroll container placed at the top includes 
    - Segmented search bar
        - Destination selector
        - Date range selector
        - Occupants selector
    - Below search bar selection chips to refine search by all, rooms, experiences or services
## Main
4 column grid with room card components

# CATALOG
Top nav bar
- Segmented search bar shrinks in width
- ameneties chip selectors to refine search placed below search bar 
- 2 column grid with room card components
    - Vertical scrolling enabled

# ROOM DETAIL
- H1 with room name
- Asymmetric photo grid gallery showcasing room images
- h2 room title
- p with room details
- Rating
- Host details
    - profile image
    - host name
    - host experience
-  Amenity list
  List all amenitiess with amenity icon, amenity name and descriptions
- Reservation summary aside
- h2 price
- segmented date selector:
    - Arrival selector
    - Departure selector
- Book CAT
- Secondary information

**LARGE BREAKPOINT**
# HOME

## Navigation
-  Top nav bar grows in width

## Search bar and Selector chips
- Grows in width
## Main
5 column grid with room card components

# CATALOG
Top nav bar grows in width
- Segmented search bar shrinks in width
- ameneties chip selectors to refine search placed below search bar 
- 1 column grid with room card components grow in size
## Aside Map
Gray container with text "Aside map"

# ROOM DETAIL
No changes: text and width of elements grow in size