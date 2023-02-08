Attribute VB_Name = "VbaHelpers"
Option Explicit

Private Declare PtrSafe Function ShellExecute _
  Lib "shell32.dll" Alias "ShellExecuteA" ( _
    ByVal hWnd As Long, _
    ByVal Operation As String, _
    ByVal Filename As String, _
    Optional ByVal Parameters As String, _
    Optional ByVal Directory As String, _
    Optional ByVal WindowStyle As Long = vbMinimizedFocus _
  ) As Long

Const BASE_URL = "https://vbahelpers.ru/search"

Private Sub SearchHelperByKeyWord(ByVal keywords$)
    Call ShellExecute(0, "Open", BASE_URL & "?type=k&query=" & keywords)
End Sub

Private Sub SearchHelperById(ByVal id$)
    Call ShellExecute(0, "Open", BASE_URL & "?type=i&query=" & id)
End Sub

Sub SearchHelper()
Attribute SearchHelper.VB_Description = "Quick search VBA helper"
Attribute SearchHelper.VB_ProcData.VB_Invoke_Func = "q\n14"
    Dim myQuery$: myQuery = InputBox("Provide keywords or ID (number)", "Search VBA helper")
    If Trim(myQuery) = "" Then Exit Sub
    If IsNumeric(myQuery) Then
        Call SearchHelperById(myQuery)
    Else
        Call SearchHelperByKeyWord(myQuery)
    End If
End Sub
