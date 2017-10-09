clear
load viewdata.mat
%Create the column vector viewPct containing the percentage viewed for each 
%variable according to the formula: 
%Percentage viewed = (Minutes watched / Views) / (Video length).
%NOTE:  You need to divide by elements, not matrix division
viewPct = (viewdata(:,3)./viewdata(:,2))./viewdata(:,1);

for k=1:length(viewPct)
  if (viewdata(k,1) < 1.5)
    %add to viewPctShort
    viewPctShort(end+1) = viewPct(k);
  elseif (viewdata(k,1) < 2.25)
    %add to viewPctMedium
    viewPctMedium(end+1) = viewPct(k);
  else 
    %add to viewPctLong 
    viewPctLong(end+1) = viewPct(k);
  end
  
end
shortPct = mean(viewPctShort)
medPct = mean(viewPctMedium)
longPct = mean(viewPctLong)
  