%%%%%I mudy open the reading.txt file with read only permissions
clear
filename = 'readings.txt';
delimiterIn = ' ';
headerlinesIn = 1;
A = importdata(filename,delimiterIn,headerlinesIn);
A



%%%% Close the file
%%%%fclose('readings.txt');
