%% Simulate the sum of rolling 6 dice 1e6 times.
clear
%numSims = 1e6;
numSims = 1e5;
%for i = 1:numSims
%    % Create 6 random integers in the range [1, 6]
%    dice = randi([1, 6], 1, 6);
%    
%    % Sum the six integers and store the result
%    diceSum(i) = sum(dice);
%enddice 

for i = 1:numSims
    % Create 6 random integers in the range [1, 6]
    dice = sum(randi([1, 6], 1, 6));
%    sum_6_dice=0;
%    for jj = 1:6
%      sum_6_dice += randi([1,6]);
%    end
endfor



%diceSum = zeros(36,1);
%incrementing_vector=1:36;
%for K = 1:numSims
%    
%    dice = randi([1, 6], 1, 6);
%    sum_6_dice = sum(dice);
%%    sum_6_dice=0;
%%    for jj = 1:6
%%      sum_6_dice += randi([1,6]);
%%    end
%    diceSum(sum_6_dice,1) += 1;
%
%end
%  
%L = 1:1:36;
%bar(L,diceSum(:,1));