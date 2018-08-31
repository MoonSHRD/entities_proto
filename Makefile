PROTOC = protoc --plugin=./protoc-gen-gogo -Itypes -I/usr/local/include
PROTOBUF_VERSION = 3.5.1
UNAME_S := $(shell uname -s)
CURRENT_DIRECTORY = $(shell pwd)

ifeq ($(UNAME_S),Linux)
	PLATFORM = linux
endif
ifeq ($(UNAME_S),Darwin)
	PLATFORM = osx
	BREW = $(shell which brew)
endif

export GOPATH=$(CURRENT_DIRECTORY)/tmpgopath:$(CURRENT_DIRECTORY)

.PHONY: all clean deps proto build

all: proto

dirs:
	mkdir build

protoc-gen-gogo:
	go build github.com/gogo/protobuf/protoc-gen-gogo


%.pb.go: %.proto protoc-gen-gogo
	$(PROTOC) --gogo_out=types $<

proto: types/types.proto types/types.pb.go
	npm run proto


deps:
	npm install
	go get \
		github.com/gogo/protobuf/jsonpb \
		github.com/gogo/protobuf/proto \



clean:
	go clean
	rm -rf \
		protoc-gen-gogo \
		src/entities.pb.go \



protobuf-install:
ifeq ($(BREW),)
	curl -OL https://github.com/google/protobuf/releases/download/v$(PROTOBUF_VERSION)/protoc-${PROTOBUF_VERSION}-$(PLATFORM)-x86_64.zip \
	&& sudo unzip protoc-$(PROTOBUF_VERSION)-$(PLATFORM)-x86_64.zip -d /usr/local && sudo chmod 755 /usr/local/bin/protoc \
	&& sudo find /usr/local/include/google -type d -exec chmod 755 -- {} + && sudo find /usr/local/include/google -type f -exec chmod 644 -- {} + \
	&& rm protoc-$(PROTOBUF_VERSION)-$(PLATFORM)-x86_64.zip
else
	$(BREW) install protobuf
endif



