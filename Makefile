all:
	mkdir -p build
	TWEEGO_PATH=. $(GOPATH)/bin/tweego -o build/index.html src buttplug-twine/src assets

clean:
	rm -rf build
