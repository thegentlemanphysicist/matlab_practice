%This function must produce an error message if three conditions aren't met.
  %1)if variable input options exist, they must be in pairs
  %2)The name portion of the variable must be before the value and must be 
  %  a string 'zoom', 'rotate', or 'tilt'
  %3)The value portion of the variable must be numeric  


function viewImage (I,varargin)
  %Write a validation code.
  lenVaragin = length(varargin);
  if (mod(lenVaragin,2)~=0)
    error('The variable inputs must be in a pair.');
  endif

  for K=1:(lenVaragin/2)
    name_of_varargin = varargin{2*K-1};
    if ~isstr(name_of_varargin)
        error('The first variable of any pair input must be a string.');
    endif
    if ~any(strcmp(name_of_varargin,{'zoom','rotate','tilt'} ))
      error(['The first variable of any pair input must be a name:"zoom", "rotate", or "tilt".  You entered: ' name_of_varargin]);
    endif
    num_varagin = varargin{2*K};
    if ~isnumeric(num_varagin)
      error('The secong variable of any pair must be numeric')
    endif
  endfor

endfunction
  
  
%% That the varargin variables always come in pairs
%% an odd number should throw and error  
%!test
%! try
%!  viewImage(5,2);
%!  msg = 'No error was called.'
%! catch
%!  msg = lasterror.message;
%! end_try_catch
%! assert(msg,'The variable inputs must be in a pair.') 
%%There two elements won't throw an error 
%!test
%! try
%!   viewImage(5,'tilt',103.245)
%!   msg = 'No error was called.'
%! catch
%!  msg = lasterror.message;
%! end_try_catch
%! assert(msg,'No error was called.') 
%%Three elements throw an error
%!test
%! try
%!  viewImage(5,'tilt',2,'apple');
%!  msg = 'No error was called.';
%! catch
%!  msg = lasterror.message;
%! end_try_catch
%! assert(msg,'The variable inputs must be in a pair.') 
%%Four don't
%!test
%! try
%!   viewImage(5,'tilt',444, 'zoom', 3.55)
%!   msg = 'No error was called.';
%! catch
%!  msg = lasterror.message;
%! end_try_catch
%! assert(msg,'No error was called.') 
%%Now test that an error is returned when we don't have 
%%a string tilt, zoom or rotate as the second variable
%%No error if I enter the correct strings.
%!test
%! msg = 'No error was called.';
%! try
%!  viewImage('blah', 'tilt',5,'zoom',6,'rotate',7)
%! catch
%!  msg = lasterror.message;
%! end_try_catch
%! assert(msg,'No error was called.') 
% The name variable must be a string
%!test
%! try
%!  msg = 'No error was called.';
%!  viewImage(5,7,2,7,2);
%! catch
%!  msg = lasterror.message;
%! end_try_catch
%! msg
%! assert(msg,'The first variable of any pair input must be a string.') 
%There should be an error that matches the string
%!test
%! try
%!  msg = 'No error was called.';
%!  viewImage(5,'tilt',2,'rotating',2);
%! catch
%!  msg = lasterror.message;
%! end_try_catch
%! msg
%! assert(msg,'The first variable of any pair input must be a name:"zoom", "rotate", or "tilt".  You entered: rotating') 
%Test a non numeric entry
%!error 'The  variable of any pair must be numeric'
%! viewImage(5,'tilt','zoom','rotating',2);
%!
%!
%!
%!
%!
%!
 
  