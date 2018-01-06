all:
	mkdir -p build
	TWEEGO_PATH=. $(GOPATH)/bin/tweego -o build/index.html src

clean:
	rm -rf build
