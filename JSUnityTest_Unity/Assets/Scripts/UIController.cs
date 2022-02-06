using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class UIController : MonoBehaviour
{
    [SerializeField]
    TMP_Text MainText;

    public void SetText(string text)
    {
        MainText.text = text;
    }
}
