clear

fun = @(x) (x.^2 - sin(x))
x0=0.5
[xmin,ymin] = fminsearch(fun,x0)