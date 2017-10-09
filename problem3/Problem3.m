clear
load TData.mat

%The values loaded are T, x, and y.
%Make the grid for plotting
[xq,yq] = meshgrid(1:675,1:350);
%extrapolate the data using the v4 method
%matlab and octave differ here.  octave methods don't seem to be implemented yet
%https://www.gnu.org/software/octave/doc/v4.2.0/Multi_002ddimensional-Interpolation.html
Level_list_vector = [-5,-4,-3,-2,-1,0,1,2,3,4,5];
vq = griddata(x,y,T,xq,yq,METHOD = "linear");
%Let's plot this
[C,h] = contour(xq,yq,vq, LevelList = Level_list_vector);
clabel(C,h);
hold on;
plot(x,y, 'o');
hold off;


%Notes:  This plot looks ugly, mostly because spline doesn't seem to work in 
%octave.