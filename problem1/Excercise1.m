%%%%%I mudy open the reading.txt file with read only permissions
clear
fileID = fopen('readings.txt','r');
%%%%%Fscan the file into the variables 
formatSpecString = '%s';
%formatSpec = '%d %d %d %d %d %d  %s %f';
formatSpec = '%d %s %s %s %s %s  %s %f';
%formatSpec = '%d';
%sizeB = [8 Inf];

%B = fscanf(fileID,formatSpec)%,sizeB)


C_text = textscan(fileID, formatSpecString, 1);
C_data = textscan(fileID, formatSpec);

%Temp_Cell_Array = cell2mat(C_data(1,2))
%DateVector = cell2mat(Temp_Cell_Array)
%tf  = iscell(Temp_Cell_Array)
%tf2 = iscell(DateVector)

for i = 1:6
  DateVector = cell2mat(C_data(1,i))
  
  if iscell(DateVector)
    DateVector=cell2mat(DateVector)
    size(A)
    size(DateVector(:,1))
    one_vector = DateVector(:)
%    two_vector = DateVector(:,1)
    A(:,i) = DateVector;
  else
    A(:,i) = DateVector;
  end
end
A
%}

%lenth_of_list = length(DateVector)
%{
for i = 1:6
  DateMatrix(:,i) = cell2mat(C_data(1,i));
end
%}
%DateMatrix =cell2mat(C_data(1,1:6))



%C = textscan(fileID,formatSpec)

%{
%Note: Dlmread can only read numeric data.
%Look at the collums that will be integers.
range = [1 0 Inf 5] ;
%A = dlmread(fileID,' ',1,0)
A = dlmread(fileID,' ',range)
%}



%%%% Close the file
fclose('readings.txt');
