## Partner Project: Tower of Hanoi
### by TL Williams and Jonathan Leavell

[Tower of Hanoi URL](https://tlwilliams895.github.io/tower_of_hanoi_js/)

The Tower of Hanoi is a puzzle.

It consists of three or more rods and a number of disks of different sizes, which can slide onto any rod. The puzzle starts with all the disks stacked on one rod, largest at the bottom, smallest at the top.

The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:
    * Only one disk can be moved at a time.
    * Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.
    * No disk may be placed on top of a smaller disk.

### Development Plan:
    * Make each tower a flex box that stacks elements from bottom to top using the FlexBox Model
    * Make/have the player click twice for each move - first to pick the source tower, second to pick the destination tower. Use a variable to keep track of which mode the player is in.
    * Add a click handler to each of the three towers. Use event.currentTarget inside the event handler to determine which tower was clicked.
    * Use the DOM property childElementCount to find how many disks are in a tower.
    * Use the DOM property lastElementChild to find the disk on top of a tower.
    * Use the DOM method appendChild() to add a disk to a tower.
        * This method has been many times in previous assignments -- When using appendChild on an element that already has a parent, it is automatically removed from the old parent and added to the new one.
    * Use the Element.clientWidth property to get the width of your disk elements.
