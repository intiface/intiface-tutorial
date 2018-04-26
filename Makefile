all: clean
	mkdir -p build
	TWEEGO_PATH=. $(GOPATH)/bin/tweego -o build/index.html --head=util/piwik.html src buttplug-twine/src assets/images
	cp assets/screencaps/* build

clean:
	rm -rf build
