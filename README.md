<h1 align="center" style="margin-top: 0px;">Area chart CWC made for WinCC Unified</h1>

<p align="center" style="margin-bottom: 0px !important;">
  <img width="200" src="docs/icon.png" alt="Icon" align="center">
</p>


### 1. CONTENT

HTML area chart element done with ApexChart

### 2. INTERFACE

  - **X_axis** : Array of element to draw the X axis of the chart (i.e. ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])

  - **Y_axis** : String in array format of numbers to draw the seires of the chart (i.e. "[[18, 21, 22, 16, 19, 21, 21, 21],[7, 9, 11, 11, 9, 12, 11, 11]]")
  
  - **DataName** : Array of strings with the name for each series (i.e. ["Max °C","Min °C"])
    
  - **X_axisname** : Name of the X axis (i.e. "Days")
  
  - **Y_axisname** : Name of the Y axis (i.e. "Temperatures")

  - **SeriesColor** : Array of string with the color in Hex format for each series (i.e. ["#ee730d","#1183e8"])
  
  - **SeriesLabels** : Flag to hide or show (False / True) the labels on the series (i.e. "True")
  
  - **LineType** : Draw smooth lines or straight lines (i.e. "Smooth")
### 3. EVENTS

  - **NONE**