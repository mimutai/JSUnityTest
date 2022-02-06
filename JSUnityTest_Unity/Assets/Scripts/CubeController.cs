using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CubeController : MonoBehaviour
{
    void Update()
    {
        float value = Time.deltaTime * 20;
        transform.Rotate(new Vector3(value, value, value));
    }

    /// <summary>
    /// オブジェクトのサイズを拡大する
    /// </summary>
    /// <param name="value"></param>
    public void ExpandScale(float value)
    {
        transform.localScale = transform.localScale * value;
    }
}
