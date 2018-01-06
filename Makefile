all:
	mkdir -p build
	TWEEGO_PATH=. ~/go/bin/tweego -o build/index.html src

clean:
	rm -rf build
