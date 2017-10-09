%%%%%%    an x-axis with a minimum value of 0 and a maximum value of 4
%%%%%%    a plot of the position vector as a solid blue line
%%%%%%    a left y-axis colored in blue with a minimum value of -5 and a maximum value of 5
%%%%%%    a plot of the velocity vector as a dashed black line
%%%%%%    a right y-axis colored in black with a minimum value of -0.5 and a maximum value of +0.5
%%%%%%    a right y-axis colored in black with a minimum value of -0.5 and a maximum value of +0.5
%    a title reading "Impact Data" as shown in the figure
%    a legend in the top center of the axes with the correct label for each plot
load data
[ax, p, v] = plotyy(time, position, time, velocity);

%%%%%%%%%%%%
%%%%%%Here we use get() to find out what we can change
%%%%%%%%%%%%
set(ax, "xlim" ,[0 4])
set(p, "color" , "b")
set(ax(1), "ylim", [-5 5])
set(v, "color", "k")
%%https://www.mathworks.com/help/matlab/ref/linespec.html
set(v, "linestyle", '--')
set(ax(2), "ylim", [-0.5 0.5])
set(ax(2), "ycolor", "k")
set(ax(1),"title", "Impact Data")
set(get(ax(1),"title"), "fontsize", 20)
%set(get(ax(1),"ylabel"), "displayname", "Position (cm)")
ylabel(ax(1), "Position (cm)")
set(get(ax(1),"ylabel"), "fontsize", 20)
ylabel(ax(2), "Velocity (m/s)")
set(get(ax(2),"ylabel"), "fontsize", 20)
legend([p;v], "Position", "Velocity")
%set(get(legend), "fontsize", 20)