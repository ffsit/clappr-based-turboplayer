# clappr-based-turboplayer
Clumsy implementation of Clappr video player for turbostream or awesome theater night.

## embed to wordpress
1. Follow instructions in html file.
2. Remove the body{...} from css file.
3. Fill in elements for 'vsrc' in js file.

## To Do:

1. Somehow obscure sources, at the moment they are in plain view.
2. Ping feature to select best video source on load. [Simple Promise Implementation by Doug Turnbull](http://opensourceconnections.com/blog/2014/02/16/a-simple-promise-implementation-in-about-20-lines-of-javascript/) is promising.
3. Stuff... 


regex explanation:
```
(?:^|\s) # match the start of the string, or any single whitespace character

MyClass  # the literal text for the classname to remove

(?!\S)   # negative lookahead to verify the above is the whole classname
         # ensures there is no non-space character following
         # (i.e. must be end of string or a space)
```
Solution by [Peter Boughton](http://stackoverflow.com/users/9360/peter-boughton) at [Change an element's class with JavaScript](http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript)

