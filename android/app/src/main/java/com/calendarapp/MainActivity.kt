package com.calendarapp

import android.content.Intent
import android.os.Bundle
import android.util.Log
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactInstanceManager
import com.facebook.react.bridge.ReactContext
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.concurrentReactEnabled
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.ReactInstanceManager.ReactInstanceEventListener

class MainActivity : ReactActivity(), ReactInstanceEventListener {

    private var data: String = ""

    override fun getMainComponentName(): String = "CalendarApp"

    override fun createReactActivityDelegate(): ReactActivityDelegate =
            DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Log.e("TAG123", "onCreate")
        onSharedIntent()
    }
    override fun onStart() {
        super.onStart()
        Log.e("TAG123", "onStart")
        onSharedIntent()
    }

    private fun onSharedIntent() {
        val receivedAction: String? = intent.action
        val receivedType: String? = intent.type
        if (receivedAction == Intent.ACTION_SEND && receivedType?.startsWith("text/") == true) {
            val receivedText: String? = intent.getStringExtra(Intent.EXTRA_TEXT)
            receivedText?.let {
                Log.e("TAG123", it)
                data = it
            }
        } else {
            Log.e("TAG123", "No data")
        }
    }

    override fun onResume() {
        super.onResume()
        reactInstanceManager.addReactInstanceEventListener(this)
    }

    override fun onPause() {
        super.onPause()
        reactInstanceManager.removeReactInstanceEventListener(this)
    }

    override fun onReactContextInitialized(context: ReactContext) {
        if (data.isNotEmpty()) {
            context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                    ?.emit("result", data)
        }
    }
}
