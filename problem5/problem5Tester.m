clear


test1()
%fact(5)

myTests = {test1(), test2(), test3()} ; 

for K = 1 : length(myTests)
   result{K} = myTests{K};
   if result{K}
    disp(strcat('Test ',int2str(K),' passed'));      
   else
    disp(strcat('Test ',int2str(K),' did not pass'));
   end
end
%}
function f = fact(n)
    f = prod(1:n);
end



function x = test1()
%  fact(4)
  x = 1;
end
  
function x = test2()
  x = 1;
end 
  
function x = test3()
  x = 0;
end