!function() {

	var CameraManager = {

		// The camera stream
		stream: false,

		capabilities: {
			focusModes: "",
			pictureSizes: [{
				width: 600,
				height: 600
			}]
		},

		getListOfCameras: function() {
			console.log('mozCamera.getListOfCameras')
			return [this]
		},

		/**
		 * Gets a camera
		 */
		getCamera: function(options, callback) {
			console.log('mozCamera.getCamera')

			navigator.mozGetUserMedia({video: true}, 
				function(stream) {
				 	this.stream = stream
				 	callback(this)
				}.bind(this),
				function() {
					console.log('Could not initialize camera.')
				}
			)

		},

		getPreviewStream: function(config, callback) {
			console.log('mozCamera.getPreviewStream')
			callback(this.stream)
		},

		getPreviewStreamVideoMode: function(config, callback) {
			console.log('mozCamera.getPreviewStreamVideoMode')
			callback(this.stream)
		},

		resumePreview: function() {
			console.log('mozCamera.resumePreview')
		},

		autoFocus: function() {
			console.log('mozCamera.autoFocus')
		},

		takePicture: function() {
			console.log('mozCamera.takePicture')
		},

		release: function() {
			console.log('mozCamera.release')
		}
	}

	FFOS_RUNTIME.makeNavigatorShim('mozCameras', CameraManager)
}()
