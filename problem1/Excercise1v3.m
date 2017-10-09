%%%%%I mudy open the reading.txt file with read only permissions
clear
fileID = fopen('readings.txt','r');

%%%%%Sec up the formatting of the data in the table 
formatSpecString = '%s';
formatSpec = '%d %d %d %d %d %d  %s %f';
%formatSpec = '%d %s %s %s %s %s  %s %f';

C_text = textscan(fileID, formatSpecString, 1);
C_data = textscan(fileID, formatSpec);

%This reads the data into the table for us, the iccell if statement may not be 
%necessary now that I'm using integers for those entries 
for m = 1:6
  DateVector = cell2mat(C_data(1,m));  
  if iscell(DateVector)
    DateVector2=cell2mat(DateVector)
    iscell(DateVector2)
    A(:,m) = DateVector2
  else
    A(:,m) = DateVector;
  end
end
%convert the time stamp into a single variable named dates
dates = int64(A(:,6) + 100*A(:,5) + 100^2*A(:,4)+ 100^3*A(:,3) + 100^4*A(:,2))+100^5*int64(A(:,1))
readings = double(cell2mat(C_data(1,8)))

%%%% Close the file
fclose('readings.txt');





%%%%Functions for excercise one!
