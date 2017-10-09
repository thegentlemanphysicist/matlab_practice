function varargout = sinewave(varargin)
% SINEWAVE MATLAB code for sinewave.fig
%      SINEWAVE, by itself, creates a new SINEWAVE or raises the existing
%      singleton*.
%
%      H = SINEWAVE returns the handle to a new SINEWAVE or the handle to
%      the existing singleton*.
%
%      SINEWAVE('CALLBACK',hObject,eventData,handles,...) calls the local
%      function named CALLBACK in SINEWAVE.M with the given input arguments.
%
%      SINEWAVE('Property','Value',...) creates a new SINEWAVE or raises the
%      existing singleton*.  Starting from the left, property value pairs are
%      applied to the GUI before sinewave_OpeningFcn gets called.  An
%      unrecognized property name or invalid value makes property application
%      stop.  All inputs are passed to sinewave_OpeningFcn via varargin.
%
%      *See GUI Options on GUIDE's Tools menu.  Choose "GUI allows only one
%      instance to run (singleton)".
%
% See also: GUIDE, GUIDATA, GUIHANDLES

% Edit the above text to modify the response to help sinewave

% Last Modified by GUIDE v2.5 02-Feb-2015 14:00:55

% Begin initialization code - DO NOT EDIT
gui_Singleton = 1;
gui_State = struct('gui_Name',       mfilename, ...
                   'gui_Singleton',  gui_Singleton, ...
                   'gui_OpeningFcn', @sinewave_OpeningFcn, ...
                   'gui_OutputFcn',  @sinewave_OutputFcn, ...
                   'gui_LayoutFcn',  [] , ...
                   'gui_Callback',   []);
if nargin && ischar(varargin{1})
    gui_State.gui_Callback = str2func(varargin{1});
end

if nargout
    [varargout{1:nargout}] = gui_mainfcn(gui_State, varargin{:});
else
    gui_mainfcn(gui_State, varargin{:});
end
% End initialization code - DO NOT EDIT


% --- Executes just before sinewave is made visible.
function sinewave_OpeningFcn(hObject, eventdata, handles, varargin)
% This function has no output args, see OutputFcn.
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
% varargin   command line arguments to sinewave (see VARARGIN)

% Choose default command line output for sinewave
handles.output = hObject;

% Update handles structure
guidata(hObject, handles);

% UIWAIT makes sinewave wait for user response (see UIRESUME)
% uiwait(handles.figure1);




% --- Outputs from this function are returned to the command line.
function varargout = sinewave_OutputFcn(hObject, eventdata, handles) 
% varargout  cell array for returning output args (see VARARGOUT);
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Get default command line output from handles structure
varargout{1} = handles.output;


% --- Executes on slider movement.
function sldAmplitude_Callback(hObject, eventdata, handles)
% hObject    handle to sldAmplitude (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'Value') returns position of slider
%        get(hObject,'Min') and get(hObject,'Max') to determine range of slider


% --- Executes during object creation, after setting all properties.
function sldAmplitude_CreateFcn(hObject, eventdata, handles)
% hObject    handle to sldAmplitude (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: slider controls usually have a light gray background.
if isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor',[.9 .9 .9]);
end


% --- Executes on slider movement.
function sldFrequency_Callback(hObject, eventdata, handles)
% hObject    handle to sldFrequency (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'Value') returns position of slider
%        get(hObject,'Min') and get(hObject,'Max') to determine range of slider


% --- Executes during object creation, after setting all properties.
function sldFrequency_CreateFcn(hObject, eventdata, handles)
% hObject    handle to sldFrequency (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: slider controls usually have a light gray background.
if isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor',[.9 .9 .9]);
end





function edtAmplitude_Callback(hObject, eventdata, handles)
% hObject    handle to edtAmplitude (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of edtAmplitude as text
%        str2double(get(hObject,'String')) returns contents of edtAmplitude as a double


% --- Executes during object creation, after setting all properties.
function edtAmplitude_CreateFcn(hObject, eventdata, handles)
% hObject    handle to edtAmplitude (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function edtFrequency_Callback(hObject, eventdata, handles)
% hObject    handle to edtFrequency (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of edtFrequency as text
%        str2double(get(hObject,'String')) returns contents of edtFrequency as a double


% --- Executes during object creation, after setting all properties.
function edtFrequency_CreateFcn(hObject, eventdata, handles)
% hObject    handle to edtFrequency (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end
