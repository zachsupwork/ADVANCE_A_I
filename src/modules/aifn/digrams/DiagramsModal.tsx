          minHeight: 96,
          p: { xs: 1, md: 2 },
          overflow: 'hidden',
        }}>
          <AutoBlocksRenderer
            text={diagramCode}
            fromRole='assistant'
            contentScaling={adjustContentScaling(contentScaling, -1)}
            fitScreen={isMobile}
            isMobile={isMobile}
            blocksProcessor='diagram'
            codeRenderVariant='plain'
            textRenderVariant='text'
            // Edit is moved from the BlocksRenderer to the ContentPartText
            // onMessageEdit={(text) => setMessage({ ...message, text })}
          />
        </Box>
      )}

      {!diagramCode && <Divider />}

      {/* End */}
      <Box sx={{ mt: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>

        {/* Add Message to Chat (once complete) */}
        <Button variant='soft' color='success' disabled={!diagramCode || !!abortController} endDecorator={<TelegramIcon />} onClick={handleAppendMessageAndClose}>
          Add To Chat
        </Button>

        {/* Button Group to toggle controls visibility - NOT enabled at the moment */}
        <ButtonGroup variant='solid' color='primary' sx={{ ml: 'auto' }}>
          {/*<IconButton*/}
          {/*  aria-label={showOptions ? 'Hide Options' : 'Show Options'}*/}
          {/*  onClick={() => setShowOptions(options => !options)}*/}
          {/*>*/}
          {/*  {showOptions ? <ExpandLessIcon /> : <ExpandMoreIcon />}*/}
          {/*</IconButton>*/}
          <Button
            variant={abortController ? 'soft' : 'solid'} color='primary'
            disabled={!diagramLlm}
            onClick={abortController ? () => {
              abortController.abort();
              // cHandler.setAbortController(null);
              setAbortController(null);
            } : handleGenerateNew}
            endDecorator={abortController ? <StopOutlinedIcon /> : diagramCode ? <ReplayIcon /> : <AccountTreeTwoToneIcon />}
            sx={{ minWidth: isMobile ? 160 : 220 }}
          >
            {abortController ? 'Stop' : diagramCode ? 'Regenerate' : 'Generate'}
          </Button>
        </ButtonGroup>

      </Box>

    </GoodModal>
  );
}
